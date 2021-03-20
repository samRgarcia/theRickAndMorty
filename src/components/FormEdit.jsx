import React from 'react';
import {connect} from 'react-redux';
import {setDataEdit, setIdEdit} from '../actions';
import {Form, Input, Button} from 'antd';
import Modals from "./Modal";
import {layout, validateMessages} from '../utils/Formulario';

const FortEdit = ({setDataEdit,setIdEdit, infoPersonaje}) => {
    const onFinish = (values) => {
        let id = infoPersonaje.id;
        const {personaje} = values;
        setDataEdit({
            id: id,
            name: personaje.name,
            species: personaje.species
        })
        console.log(id)
        setIdEdit(id)
    };
    return (
        <Modals name={infoPersonaje.name || ''}>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['personaje', 'name']} label="Nombre" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={['personaje', 'species']} label="Specie" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button type="primary" htmlType="submit">
                        Comfirmar
                    </Button>
                </Form.Item>
            </Form>
        </Modals>)
}

const mapStateToProps = status => {
    return {
        infoPersonaje: status.infoPersonaje,
    }
}

const mapDispatchToProps = {
    setDataEdit,
    setIdEdit,
}
export default connect(mapStateToProps, mapDispatchToProps)(FortEdit);


