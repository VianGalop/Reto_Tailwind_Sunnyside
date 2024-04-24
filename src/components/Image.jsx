


export const Image = ({order,imgMobile, imgDesktop}) => {
  return (
    <picture className={order}>
        <source media='(max-width:639px)' srcSet={imgMobile}></source>
        <source media='(max-width:640px)' srcSet={imgDesktop}></source>
        <img src={imgMobile} alt="imagen Servicio"></img>
    </picture>
  )
}
