import { Bell, CheckCheck, Info, ShieldAlert, TriangleAlert} from 'lucide-react'
import './App.css'
import Alert from './components/ui/Alert'

function App() {
  return (
    <div className='container'>
      <Alert 
        type={"alert-default"}
        icon={<Bell size={20}/>}
        title="Defaullt Alert"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vitae velit, mollitia quis recusandae ipsam itaque impedit nemo voluptate modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vitae velit, mollitia quis recusandae ipsam "
      />
      <Alert 
        type={"alert-info"}
        icon={<Info size={20}/>}
        title="Info Alert"
      >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vitae velit, mollitia quis recusandae ipsam <a href='/'>impedit nemo voluptate</a>  itaque impedit nemo voluptate modi! Lorem ipsum dolor, sit amet conse</p>
      </Alert>
      <Alert 
        type={"alert-warning"}
        icon={<ShieldAlert size={20}/>}
        title="Warning Alert"
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vitae velit, mollitia quis recusandae ipsam itaque impedit nemo voluptate modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vitae velit, mollitia quis recusandae ipsam "}
      />
      <Alert 
        type={"alert-danger"}
        icon={<TriangleAlert size={20}/>}
        title="Danger Alert"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vitae velit, mollitia quis recusandae ipsam itaque impedit nemo voluptate modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vitae velit, mollitia quis recusandae ipsam "
      />
      <Alert 
        type={"alert-success"}
        icon={<CheckCheck size={20}/>}
        title="Success Alert"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vitae velit, mollitia quis recusandae ipsam itaque impedit nemo voluptate modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vitae velit, mollitia quis recusandae ipsam "
      />
    </div> 
    
  )
}

export default App
