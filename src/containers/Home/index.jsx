import React from 'react'
import * as S from './styles'
import WhatsappLogo from '../../assets/whatsapp.svg'
const Home = () => (
    <S.Container>
        <S.FormWrapper layout="vertical">
            <S.Header>
                <img src={WhatsappLogo} alt="WhatsApp" style={{ width: 45 }} />
                <h1>Gerador de link whatsapp</h1>
            </S.Header>
            <S.Label label="Número do seu WhatsApp">
                <S.InputStyle
                    allowClear={true}
                    size="large"
                    placeholder="Seu número" />
            </S.Label>
            <S.Label label="Sua Mensagem">
                <S.TextAreaStyle
                    allowClear={true}
                    rows={5}
                    placeholder="Olá, coloque aqui sua mensagem." />
            </S.Label>
            <S.Label label="Link do WhatsApp">
                <S.InputStyle
                    allowClear={true}
                    addonBefore="http://zaplink.com.br/"
                    size="large"
                    placeholder="Informe um link" />
            </S.Label>
            <S.Label>
                <S.ActionButton type="primary" size="large" block >Gerar Link</S.ActionButton>
            </S.Label>
        </S.FormWrapper>
    </S.Container>
)
export default Home