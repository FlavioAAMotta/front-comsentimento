import React, { useState, useEffect, useContext } from "react";
import { NoticeForm } from "../../components/NoticeForm/NoticeForm";
import { MainStyle, Notices, MainContainer, Title, TitleStyle } from "./styled";
import { NoticeContainer } from "../../components/NoticeContainer/NoticeContainer";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import {
  ButtonAdd,
  NavigationButton,
  Button,
} from "../../components/ButtonAdd/ButtonAdd";
import { goToMainPageByPage } from "../../routes/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { addNotice } from "../../endpoints/addNotice";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import { limit } from "../../constants/variables";

export const Main = (props) => {
  const pathParams = useParams();
  const file = { file: null };
  const { form, onChange, onChangeFile } = useForm({
    title: "",
    description: "",
    date: "",
    file,
    status: false,
  });
  const navigate = useNavigate();
  const [url, setUrl] = useState(``);
  const [creatingNotice, setCreatingNotice] = useState(false);
  const [notices, isLoading] = useRequestData(url);
  const { data } = useContext(GlobalStateContext);

  useEffect(() => {
    const page = pathParams.navPage || 0;
    setUrl(`${BASE_URL}/notices?limit=${limit}&offset=${page}`);
  }, [pathParams.navPage]);

  useEffect(() => {
    localStorage.getItem("token") && data.setLoggedIn(true);
    goToMainPageByPage(navigate, 0);
  }, []);

  if (!pathParams.navPage) {
    pathParams.navPage = 0;
  }

  const createNotice = () => {
    setCreatingNotice(true);
  };

  const cancelCreation = () => {
    setCreatingNotice(false);
  };

  const validateFields = (form) => {
    if (!form.title || !form.description || !form.date || !form.file) {
      return false;
    }
    return true;
  };

  const onSubmit = async (event) => {
    try {
      console.log(form.file);
      event.preventDefault();
      if (validateFields(form)) {
        setCreatingNotice(false);
        await addNotice(form);
      } else {
        alert("Favor preencher todos os campos");
      }
    } catch (e) {
      alert("Erro ao submeter o formulário, tente novamente mais tarde");
    }
  };

  const noticesList =
    notices &&
    !notices.includes("!DOCTYPE") &&
    notices.length > 0 &&
    notices.map((notice) => {
      return (
        <>
          <NoticeContainer key={notice.noticeId} notice={notice} />
        </>
      );
    });

  const goForth = async () => {
    goToMainPageByPage(navigate, ++pathParams.navPage);
  };
  const goBack = async () => {
    if (pathParams.navPage <= 0) {
      alert("Essa é a página mais atual");
      pathParams.navPage = 0;
    } else {
      goToMainPageByPage(navigate, --pathParams.navPage);
    }
  };

  const changeStatus = () => {
    form.status = !form.status;
  };

  return (
    <>
      <Header />
      <MainContainer>
        {!creatingNotice && !isLoading && data.loggedIn && (
          <ButtonAdd onClick={createNotice}>Adicionar edital</ButtonAdd>
        )}
        {creatingNotice && (
          <NoticeForm
            onCancel={cancelCreation}
            onSubmit={onSubmit}
            form={form}
            onChange={onChange}
            onChangeFile={onChangeFile}
            onChangeStatus={changeStatus}
          />
        )}
          <TitleStyle>
            <h1>Editais</h1>
            <p> 40 abertos | 5 encerrados</p>
          </TitleStyle>
        <MainStyle>
          <>
            {!isLoading && (
              <NavigationButton onClick={goBack}> &lt; </NavigationButton>
            )}
          </>
          <hr />
          <Notices>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && notices && noticesList}
            {!isLoading && notices && notices.length === 0 && (
              <p>Nada a mostrar</p>
            )}
          </Notices>
          {!isLoading && notices && (
            <NavigationButton onClick={goForth}> &gt; </NavigationButton>
          )}
        </MainStyle>
        <p>PÁGINA: {pathParams.navPage}</p>
      </MainContainer>
      <Footer />
    </>
  );
};
