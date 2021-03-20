import React from 'react';
import {connect} from 'react-redux';
import {setModals} from '../actions';
import {Modal} from 'antd';

const Modals = ({children, statusModal, setModals, name}) => {
    return (
        <>
            <Modal
                title={`Modificar a: ${name}`}
                centered
                visible={statusModal}
                onOk={() => setModals(false)}
                onCancel={() => setModals(false)}
            >
                {children}
            </Modal>
        </>
    )
}

const mapStateToProps = status => {
    return {
        statusModal: status.statusModal
    }
}

const mapDispatchToProps = {
    setModals
}

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
