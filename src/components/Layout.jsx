import React, {useMemo} from 'react';
import {connect} from "react-redux";
import {useInitialStateApi} from '../hooks/useInitialStateApi';
import {setResults} from '../actions';
import {Layout} from 'antd'
import Header from "./Header";

const Layouts = ({children, setResults}) => {
    const {results: resultState} = useInitialStateApi();
    useMemo(() => {
        setResults(resultState);
    }, [resultState])
    return (
        <Layout style={{height: '100vh', background: 'white'}}>
            <Header/>
            {children}
        </Layout>
    )
}

const mapDispatchToProps = {
    setResults,
}
export default connect(null, mapDispatchToProps)(Layouts);
