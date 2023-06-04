import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [checklistItems, setChecklistItems] = useState([
    {
      id: 1,
      item: 'Revisar conceitos básicos de React (componentes, props, estados) e criar um projeto simples com componentes interativos.',
      plannedDate: '2023-06-05',
      actualDate: '',
      comments: 'Ótimo tópico para começar!',
      collapsed: true,
      completed: false,
    },
    {
      id: 2,
      item: 'Continuar a prática com React, explorando a manipulação de eventos e formulários.',
      plannedDate: '2023-06-06',
      actualDate: '',
      comments: 'Muito importante entender a manipulação de eventos.',
      collapsed: true,
      completed: false,
    },
    {
      id: 3,
      item: 'Revisar o ciclo de vida dos componentes React e criar um projeto que utilize diferentes etapas do ciclo de vida.',
      plannedDate: '2023-06-07',
      actualDate: '',
      comments: 'Vamos explorar os diferentes métodos do ciclo de vida.',
      collapsed: true,
      completed: false,
    },
    {
      id: 4,
      item: 'Revisar o react-router e criar rotas para navegação no projeto em React.',
      plannedDate: '2023-06-08',
      actualDate: '',
      comments: 'Navegação é fundamental em aplicações React.',
      collapsed: true,
      completed: false,
    },
    {
      id: 5,
      item: 'Revisar conceitos básicos de Node.js (módulos, manipulação de arquivos) e construir um projeto de backend simples usando Express.js.',
      plannedDate: '2023-06-09',
      actualDate: '',
      comments: 'Vamos criar nosso servidor backend com Express.js.',
      collapsed: true,
      completed: false,
    },
    {
      id: 6,
      item: 'Continuar o desenvolvimento do projeto de backend, implementando rotas e lógica de negócios em Node.js.',
      plannedDate: '2023-06-12',
      actualDate: '',
      comments: 'Vamos avançar com o desenvolvimento do backend.',
      collapsed: true,
      completed: false,
    },
    {
      id: 7,
      item: 'Revisar autenticação de usuários em Node.js e implementar autenticação básica no projeto de backend.',
      plannedDate: '2023-06-13',
      actualDate: '',
      comments: 'Autenticação é essencial para proteger nossos recursos.',
      collapsed: true,
      completed: false,
    },
    {
      id: 8,
      item: 'Revisar conceitos básicos de APIs RESTful e criar um projeto de API RESTful simples com o Express.js.',
      plannedDate: '2023-06-14',
      actualDate: '',
      comments: 'Vamos criar nossa API RESTful para fornecer dados.',
      collapsed: true,
      completed: false,
    },
    {
      id: 9,
      item: 'Continuar o desenvolvimento do projeto de API RESTful, adicionando mais endpoints e tratando diferentes solicitações HTTP.',
      plannedDate: '2023-06-15',
      actualDate: '',
      comments: 'Vamos expandir nossa API com mais recursos.',
      collapsed: true,
      completed: false,
    },
    {
      id: 10,
      item: 'Revisar serialização e desserialização de dados em APIs RESTful (JSON) e implementar no projeto.',
      plannedDate: '2023-06-16',
      actualDate: '',
      comments: 'A serialização é importante para o formato dos dados.',
      collapsed: true,
      completed: false,
    },
    {
      id: 11,
      item: 'Revisar tratamento de erros e códigos de status HTTP em APIs RESTful e melhorar a resposta a erros no projeto.',
      plannedDate: '2023-06-19',
      actualDate: '',
      comments: 'Vamos lidar melhor com os erros em nossa API.',
      collapsed: true,
      completed: false,
    },
    {
      id: 12,
      item: 'Revisar conceitos de teste, como tipos de testes e configuração de frameworks (Jest, Mocha, Chai).',
      plannedDate: '2023-06-20',
      actualDate: '',
      comments: 'Testes são fundamentais para garantir a qualidade do nosso código.',
      collapsed: true,
      completed: false,
    },
    {
      id: 13,
      item: 'Implementar testes automatizados para as rotas e lógica do projeto de API RESTful.',
      plannedDate: '2023-06-21',
      actualDate: '',
      comments: 'Vamos garantir que nosso código esteja funcionando corretamente com testes automatizados.',
      collapsed: true,
      completed: false,
    },
    {
      id: 14,
      item: 'Revisar conceitos básicos de segurança (autenticação, autorização) e aplicar no projeto de API RESTful.',
      plannedDate: '2023-06-22',
      actualDate: '',
      comments: 'Vamos proteger nossa API com mecanismos de segurança.',
      collapsed: true,
      completed: false,
    },
    {
      id: 15,
      item: 'Revisar conceitos básicos de SQL (DDL, DML, consultas SELECT) e fazer exercícios práticos de consultas.',
      plannedDate: '2023-06-23',
      actualDate: '',
      comments: 'Vamos mergulhar no mundo do SQL e fazer consultas.',
      collapsed: true,
      completed: false,
    },
    {
      id: 16,
      item: 'Continuar a revisão de SQL, explorando consultas com JOINs e consultas mais avançadas.',
      plannedDate: '2023-06-26',
      actualDate: '',
      comments: 'Vamos aprofundar nossos conhecimentos em consultas SQL.',
      collapsed: true,
      completed: false,
    },
    {
      id: 17,
      item: 'Revisar conceitos avançados de SQL, como otimização de consultas e criação de índices.',
      plannedDate: '2023-06-27',
      actualDate: '',
      comments: 'Vamos melhorar o desempenho de nossas consultas SQL.',
      collapsed: true,
      completed: false,
    },
    {
      id: 18,
      item: 'Revisar conceitos básicos de Docker (imagens, contêineres) e criar um Dockerfile para o projeto.',
      plannedDate: '2023-06-28',
      actualDate: '',
      comments: 'Vamos containerizar nossa aplicação com Docker.',
      collapsed: true,
      completed: false,
    },
    {
      id: 19,
      item: 'Revisar conceitos de orquestração de contêineres com Docker Compose e aplicar ao projeto.',
      plannedDate: '2023-06-29',
      actualDate: '',
      comments: 'Vamos orquestrar nossos contêineres com Docker Compose.',
      collapsed: true,
      completed: false,
    },
    {
      id: 20,
      item: 'Revisar conceitos avançados de segurança (criptografia, proteção de dados sensíveis) e implementar no projeto.',
      plannedDate: '2023-06-30',
      actualDate: '',
      comments: 'Vamos garantir a segurança dos dados em nossa aplicação.',
      collapsed: true,
      completed: false,
    },

  ]);

  const handleCheckboxChange = (id) => {
    setChecklistItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };

  const handlePlannedDateChange = (id, event) => {
    const plannedDate = event.target.value;
    setChecklistItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, plannedDate };
        }
        return item;
      });
    });
  };

  const handleActualDateChange = (id, event) => {
    const actualDate = event.target.value;
    setChecklistItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id && item.completed) {
          return { ...item, actualDate };
        }
        return item;
      });
    });
  };

  const handleCommentToggle = (id) => {
    setChecklistItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, collapsed: !item.collapsed };
        }
        return item;
      });
    });
  };

  const handleAddItem = () => {
    const newItem = {
      id: checklistItems.length + 1,
      item: prompt('Qual é a tarefa?'),
      plannedDate: '',
      actualDate: '',
      comments: '',
      collapsed: true,
      completed: false,
    };

    setChecklistItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveItem = (id) => {
    setChecklistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Checklist</h1>
      {checklistItems.map((item) => (
        <div key={item.id} className="checklist-item">
          <div className="item-header">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span>{item.item}</span>
            
          </div>
          <div className="item-details">
          <div className="buttons">
          <button
              className="comment-toggle-button"
              onClick={() => handleCommentToggle(item.id)}
            >
              {item.collapsed ? 'Add comment' : ""}
            </button>
            <button
              className="remove-button"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove item
            </button>
          </div>
            <div className="dates">
              <label>Planned Date:</label>
              <input
                type="date"
                value={item.plannedDate}
                onChange={(event) => handlePlannedDateChange(item.id, event)}
              />
              <label>Actual Date:</label>
              <input
                type="date"
                value={item.actualDate}
                onChange={(event) => handleActualDateChange(item.id, event)}
                disabled={!item.completed}
              />
            </div>
            <div
              className={`comments ${item.collapsed ? 'collapsed' : 'expanded'}`}
            >
              <label>Comments:</label>
              <textarea
                value={item.comments}
                onChange={() => {}}
              ></textarea>
            </div>
          </div>
        </div>
      ))}
      <button className="add-button" onClick={handleAddItem}>
        Add Item
      </button>
    </div>
  );
};

export default App;
