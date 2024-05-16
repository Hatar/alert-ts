import { X } from 'lucide-react';
import './alert.scss'
import { IAlert } from '../../interface/type';

const Alert =({type,title,description,icon,children}:IAlert) => {
  return (
    <div className={type}>
      <div className='alert-header'>
        <div className='title'>
          <span>
            {icon}
          </span>
          <h3>{title}</h3>
        </div>
        <X size={25} className="close" />
      </div>
      
      {children ? children : <p>{description}</p>}
    </div>
    
  )
}

export default Alert