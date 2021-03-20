import React from 'react';
import {useHistory} from 'react-router-dom';
import { Empty, Button } from 'antd';
const CreatePerfil = () => {
    const history = useHistory();
    return (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
                height: 60,
            }}
            description={
                <span>
        Customize <a href="#API">Nuevo avatar</a>
      </span>
            }
        >
            <Button type="primary" onClick={()=>history.push('/crear-perfil')} >Crear ahora</Button>
        </Empty>
    );
}
export default CreatePerfil;
