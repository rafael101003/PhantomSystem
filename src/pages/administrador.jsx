import { useState } from "react";

// Tabela temporária de administradores
const administradores = [
  { id: 1, usuario: 'Rafael', senha: '123' }
];

function Administrador() {
  const [inputUsuario, setInputUsuario] = useState('');
  const [inputSenha, setInputSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const validarLogin = (e) => {
    e.preventDefault();
    setMensagemErro('');

    const usuarioFormatado = inputUsuario.trim();
    const usuarioEncontrado = administradores.find(
      (item) => item.usuario.toLowerCase() === usuarioFormatado.toLowerCase() && item.senha === inputSenha
    );

    if (usuarioEncontrado) {
      setUsuarioLogado(usuarioEncontrado);
      setInputUsuario('');
      setInputSenha('');
    } else {
      setMensagemErro('Usuário ou senha inválidos.');
    }
  };

  const logout = () => {
    setUsuarioLogado(null);
    setInputUsuario('');
    setInputSenha('');
    setMensagemErro('');
  };

  // Tela de Login
  if (!usuarioLogado) {
    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100 py-4">
        <div className="card bg-dark text-white border-secondary p-4 p-md-5 shadow-lg w-100" style={{ maxWidth: '420px' }}>
          <h3 className="card-title text-center mb-4 text-purple">Acesso Restrito</h3>

          {mensagemErro && (
            <div className="alert alert-danger py-2 mb-3 small" role="alert">
              {mensagemErro}
            </div>
          )}

          <form onSubmit={validarLogin} className="d-flex flex-column gap-3">
            <div>
              <label className="form-label text-white-50">Usuário Admin</label>
              <input
                placeholder="Insira seu usuário..."
                type="text"
                className="form-control bg-dark text-white border-secondary"
                value={inputUsuario}
                onChange={(e) => setInputUsuario(e.target.value)}
              />
            </div>

            <div>
              <label className="form-label text-white-50">Senha</label>
              <input
                placeholder="Insira sua senha..."
                type="password"
                className="form-control bg-dark text-white border-secondary"
                value={inputSenha}
                onChange={(e) => setInputSenha(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2 py-2 fw-semibold">
              Entrar no Painel
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Tela do Painel Administrativo
  return (
    <div className="container py-5 text-white">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center pb-3 mb-4 border-bottom border-secondary gap-3">
        <div>
          <h2 className="mb-1">Painel do Administrador</h2>
          <p className="text-white-50 mb-0">Bem-vindo, <strong>{usuarioLogado.usuario}</strong>! Ao Painel de teste</p>
        </div>
        <button onClick={logout} className="btn btn-outline-danger px-4">
          Sair
        </button>
      </div>
    </div>
  );
}

export default Administrador;