import React, { useState } from 'react'

import * as S from './styles'

import { phone } from '../../shared/masks'
import SelectCountries from '../../shared/components/SelectCountries'

const Home = () => {

    const [phoneMasked, setPhoneMasked] = useState("")

    function handlePhone(number) {
        const numberMasked = phone(number)

        setPhoneMasked(numberMasked)
    }

    return (
        <S.Container>
            <S.FormWrapper layout="vertical">
                <S.Header>
                    <h1>Gerador de link whatsapp</h1>
                </S.Header>
                <S.Label label="Número do seu WhatsApp">
                    <div style={{ display: 'flex' }}>
                        <SelectCountries />
                        <S.InputStyle
                            allowClear={true}
                            size="large"
                            value={phoneMasked}
                            pattern="[0-9]*"
                            style={{ borderRadius: '0 5px 5px 0' }}
                            onChange={e => handlePhone(e.target.value)}
                            placeholder="Seu número" />
                    </div>
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
                <S.Label style={{ marginBottom: 0 }}>
                    <S.ActionButton type="primary" size="large" block >Gerar Link</S.ActionButton>
                </S.Label>
            </S.FormWrapper>
        </S.Container>
    )
}

export default Home