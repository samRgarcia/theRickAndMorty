import React from 'react';
import {useHistory} from 'react-router-dom';
import {Tooltip, Button} from 'antd'
import {HomeOutlined} from '@ant-design/icons';
import '../assets/components/header.css';

const Header = () => {
    const history = useHistory();
    return (<header className={'container-header'}>
        <Tooltip className={'item-home'} title="search">
            <Button type="dashed" shape="circle" icon={<HomeOutlined/>} onClick={() => history.push('/')}/>
        </Tooltip>

    </header>)
}

export default Header;
