import React from 'react'

export default function Dashboard({ account }) {
  return (
    <section>
      <h1>Painel de Controle</h1>
      <ul>
        <li><strong>Nome de Usu rio:</strong> {account.username}</li>
        <li><strong>E-mail:</strong> {account.email}</li>
        <li><strong>Sexo:</strong> {account.gender}</li>
        <li><strong>Data de Nascimento:</strong> {account.bornDate}</li>
      </ul>

    </section>
  )
}