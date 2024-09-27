'use client';
import { useState } from 'react';
import { predictChurn } from '../../api.js'; 
import './Form.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    tenure: '',
    MonthlyCharges: '',
    TotalCharges: '',
    Contract: '',
    OnlineSecurity: '',
    TechSupport: '',
    PaperlessBilling: '',
    DeviceProtection: '',
    OnlineBackup: '',
    PaymentMethod: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await predictChurn(formData); 
      setResult(data);
    } catch (error) {
      console.error("Erro ao obter o resultado:", error);
    }
  };

  const labels = {
    tenure: 'Tempo de serviço',
    MonthlyCharges: 'Custos mensais',
    TotalCharges: 'Custos totais',
    Contract: 'Contrato',
    OnlineSecurity: 'Segurança online',
    TechSupport: 'Suporte técnico',
    PaperlessBilling: 'Fatura sem papel',
    DeviceProtection: 'Proteção de dispositivo',
    OnlineBackup: 'Backup online',
    PaymentMethod: 'Método de pagamento'
  };

  const options = {
    Contract: ['Month-to-month', 'One year', 'Two year'],
    OnlineSecurity: ['Yes', 'No', 'No internet service'],
    TechSupport: ['Yes', 'No', 'No internet service'],
    PaperlessBilling: ['Yes', 'No'],
    DeviceProtection: ['Yes', 'No', 'No internet service'],
    OnlineBackup: ['Yes', 'No', 'No internet service'],
    PaymentMethod: ['Electronic check', 'Mailed check', 'Bank transfer (automatic)', 'Credit card (automatic)']
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {Object.keys(formData).map((field) => (
          <div key={field} className="form-group">
            <label htmlFor={field} className="form-label">
              {labels[field]}
            </label>
            {options[field] ? (
              <select
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="">Selecione...</option>
                {options[field].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="form-input"
              />
            )}
          </div>
        ))}
        <button type="submit" className="form-button">
          Enviar
        </button>
      </form>
      {result && (
        <div className="result">
          <h3>Resultado da Previsão:</h3>
          <p className={`result-text ${result.prediction === 1 ? 'alert' : 'success'}`}>
            {result.prediction === 1 ? 'O cliente provavelmente vai cancelar' : 'O cliente provavelmente não vai cancelar'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;





