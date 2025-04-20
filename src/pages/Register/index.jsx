import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Register({ setAccounts, Accounts, setAccount }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    birthdate: '',
    birthdateYear: '',
    birthdateMonth: '',
    birthdateDay: '',
  });


  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: null
      }));
    }
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.username.trim() || Accounts.some(account => account.username === formData.username)) newErrors.username = 'Nome de usuário é obrigatório';
      if (!formData.email.trim()) {
        newErrors.email = 'E-mail é obrigatório';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || Accounts.some(account => account.email === formData.email)) {
        newErrors.email = 'E-mail inválido';
      }
    }

    if (step === 2) {
      if (!formData.gender) newErrors.gender = 'Gênero é obrigatório';
      if (!formData.birthdateMonth || !formData.birthdateDay || !formData.birthdateYear) {
        newErrors.birthdate = 'Data de nascimento é obrigatória';
      } else {
        const birthDate = new Date(formData.birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }

        if (age < 13) {
          newErrors.birthdate = 'Você deve ter pelo menos 13 anos';
        }
      }
    }

    if (step === 3) {
      if (!formData.password) {
        newErrors.password = 'Senha é obrigatória';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateStep()) {
      setIsSubmitting(false);
      return;
    }

    if (step < 3) {
      setStep(prev => prev + 1);
    } else {

      try {
        formData.birthdate = `${formData.birthdateDay}/${formData.birthdateMonth}/${formData.birthdateYear}`;

        const newAccount = {
          id: Accounts.length,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          gender: formData.gender,
          bornDate: formData.birthdate,
          favoriteGames: []
        };
        setAccounts(prev => [...prev, newAccount]);

        console.log(Accounts);

        console.log('Usuário cadastrado com sucesso:', formData);

        setAccount(Accounts[Accounts.length - 1]);
        localStorage.setItem('account', JSON.stringify(Accounts[Accounts.length - 1]));

        navigate('/');
      } catch (error) {
        console.error('Erro no cadastro:', error);
      }
    }

    setIsSubmitting(false);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  return (
    <RegisterContainer>
      <RegisterBox>
        <ProgressIndicator>
          {[1, 2, 3].map((stepNumber) => (
            <ProgressStep
              key={stepNumber}
              active={stepNumber <= step}
            >
              {stepNumber}
            </ProgressStep>
          ))}
        </ProgressIndicator>

        <h2>Cadastre-se</h2>
        <FormContainer onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <FormGroup>
                <label htmlFor="username">Nome de usuário</label>
                <Input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Digite seu nome de usuário"
                  hasError={!!errors.username}
                />
                {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <label htmlFor="email">E-mail</label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu e-mail"
                  hasError={!!errors.email}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormGroup>
            </>
          )}

          {step === 2 && (
            <>
              <FormGroup>
                <label htmlFor="gender">Gênero</label>
                <Select
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  hasError={!!errors.gender}
                >
                  <option value="">Selecione</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                  <option value="Prefiro não informar">Prefiro não informar</option>
                </Select>
                {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <label htmlFor="birthdate">Data de nascimento</label>
                <DateInputGroup>
                  <div>

                    <label htmlFor="birthdateDay">Dia</label>
                    <Input
                      type="number"
                      id="birthdateDay"
                      value={formData.birthdateDay}
                      onChange={handleChange}
                      hasError={!!errors.birthdate}
                      min="1"
                      max="31"
                    />

                  </div>
                  <div>
                    <label htmlFor="birthdateMonth">Mês</label>
                    <Input
                      type="number"
                      id="birthdateMonth"
                      value={formData.birthdateMonth}
                      onChange={handleChange}
                      hasError={!!errors.birthdate}
                      min="1"
                      max="12"
                    />
                  </div>
                  <div>
                    <label htmlFor="birthdateYear">Ano</label>
                    <Input
                      type="number"
                      id="birthdateYear"
                      value={formData.birthdateYear}
                      onChange={handleChange}
                      hasError={!!errors.birthdate}
                      min="1900"
                      max={new Date().getFullYear()}
                    />
                  </div>
                </DateInputGroup>
                {errors.birthdate && <ErrorMessage>{errors.birthdate}</ErrorMessage>}
              </FormGroup>
            </>
          )}

          {step === 3 && (
            <FormGroup>
              <label htmlFor="password">Senha</label>
              <Input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Crie uma senha com pelo menos 6 caracteres"
                hasError={!!errors.password}
              />
              {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </FormGroup>
          )}

          <ButtonGroup>
            {step > 1 && (
              <BackButton type="button" onClick={handleBack}>
                Voltar
              </BackButton>
            )}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Processando...' : step === 3 ? 'Finalizar Cadastro' : 'Próximo'}
            </Button>
          </ButtonGroup>
        </FormContainer>

        <LoginText>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </LoginText>
      </RegisterBox>
    </RegisterContainer>
  );
}

const DateInputGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  `

// Styled Components atualizados
const RegisterContainer = styled.div`
  font-family: "Satoshi-Bold", sans-serif;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const RegisterBox = styled.div`
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 450px;
  margin: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 1.8rem;
  }
`;

const ProgressIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #e0e0e0;
    z-index: 1;
    transform: translateY(-50%);
  }
`;

const ProgressStep = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#7A29E4' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#666'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
  z-index: 2;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${props => props.hasError ? '#ff4444' : '#ddd'};
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  
  &:focus {
    border-color: #7A29E4;
    box-shadow: 0 0 0 2px rgba(122, 41, 228, 0.2);
    outline: none;
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${props => props.hasError ? '#ff4444' : '#ddd'};
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  
  &:focus {
    border-color: #7A29E4;
    box-shadow: 0 0 0 2px rgba(122, 41, 228, 0.2);
    outline: none;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #7A29E4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: #6a1ed4;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const BackButton = styled.button`
  padding: 0.75rem;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const LoginText = styled.div`
  text-align: center;
  font-size: 0.95rem;
  color: #666;
  
  a {
    color: #7A29E4;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  a:hover {
    color: #6a1ed4;
    text-decoration: underline;
  }
`;