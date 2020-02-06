const Logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('ID')
}

export default Logout