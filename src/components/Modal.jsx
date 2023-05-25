const Modal = ({info, fun}) => {
    const {tipo} = info
  return (
    <div onClick={fun}>modal{tipo}</div>
  )
}

export default Modal