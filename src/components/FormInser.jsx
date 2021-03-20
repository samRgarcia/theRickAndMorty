import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {setNewPerson} from '../actions';
import {v4 as uuidv4} from 'uuid';
import {Button, Form, Input} from "antd";
import {layout, validateMessages} from "../utils/Formulario";

const FormInser = ({setNewPerson}) => {
    const history = useHistory();
    const onFinish = (values) => {
        const {personaje} = values;
        let id = uuidv4();
        setNewPerson({
            id: id,
            name: personaje.name,
            species: personaje.species
        })
        history.push('/')
    };
    return (
        <div style={{width: '625px', margin: '80px auto'}}>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['personaje', 'image']} label="Url de la imagen" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={['personaje', 'name']} label="Nombre" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={['personaje', 'species']} label="Specie" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button type="primary" htmlType="submit">
                        Crear
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const mapDispatchToProps = {
    setNewPerson,
}
export default connect(null, mapDispatchToProps)(FormInser);
