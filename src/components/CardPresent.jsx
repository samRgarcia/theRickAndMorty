import React from 'react';
import {Card, Avatar} from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';

const {Meta} = Card;
let imagenesDefault = 'https://i.pinimg.com/474x/8e/0c/fa/8e0cfaf58709f7e626973f0b00d033d0.jpg'

const CardPresent = ({image = imagenesDefault, Title, species, id,onClick,onClickEliminar}) => {
    return (<Card
        key={id}
        style={{width: 300,margin:'5px 0px'}}
        cover={
            <img
                alt="Example"
                src={image}
            />
        }
        actions={[
            <EditOutlined key={"Editar"} onClick={()=>onClick(id)}/>,
            <DeleteOutlined key={"Eliminar"} onClick={()=> onClickEliminar(id)}/>

        ]}
    >
        <Meta
            avatar={<Avatar src={image}/>}
            title={Title}
            description={`Espesie: ${species}`}

        />
    </Card>)
}

export default CardPresent;
