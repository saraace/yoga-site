import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PasswordContainer, Requirements, ReqCol, Req } from './styles';
/* import { ReactComponent as InvalidIcon } from '../../../assets/images/svg/times.svg';
import { ReactComponent as ValidIcon } from '../../../assets/images/svg/check.svg'; */

const PasswordRequirements = ({ children, password, confirm, checkMatch }) => {
  // Password Requirements
  const [requirements, setRequirements] = useState({
    'lowercaseReq' : false,
    'uppercaseReq' : false,
    'specialCharReq' : false,
    'numberReq' : false, 
    'lengthReq' : false, 
    'confirmMatch' : false
  });

  useEffect(() => {
    const lowercaseReq = /(?=.*[a-z])/.test(password);
    const uppercaseReq = /(?=.*[A-Z])/.test(password);
    const specialCharReq = /(?=.*[!@#$&*])/.test(password);
    const numberReq = /(?=.*[0-9])/.test(password);
    const lengthReq = /.{8,}/.test(password);
    const confirmMatch = checkMatch && password.length && confirm.length && password === confirm;
      
    setRequirements({
      'uppercaseReq' : uppercaseReq, 
      'lowercaseReq' : lowercaseReq, 
      'specialCharReq' : specialCharReq,
      'numberReq' : numberReq, 
      'lengthReq' : lengthReq, 
      'confirmMatch' : confirmMatch
    })
  }, [password, confirm, checkMatch]);

  return (
    <PasswordContainer>
      <div>
       { children }
      </div>
      <Requirements>
        <ReqCol>
          <Req className={password.length? (requirements.lowercaseReq? 'valid' : 'invalid') : ''}>
            <div className="icon"></div>
            One lowercase character
          </Req>
          <Req className={password.length? (requirements.uppercaseReq? 'valid' : 'invalid') : ''}>
            <div className="icon"></div>
            One uppercase character
          </Req>
          <Req className={password.length? (requirements.numberReq? 'valid' : 'invalid') : ''}>
            <div className="icon"></div>
            One number
          </Req>
        </ReqCol>
        <ReqCol>
          <Req className={password.length? (requirements.specialCharReq? 'valid' : 'invalid') : ''}>
            <div className="icon"></div>
            One special character
          </Req>
          <Req className={password.length? (requirements.lengthReq? 'valid' : 'invalid') : ''}>
            <div className="icon"></div>
            8 characters minimum
          </Req>
          { checkMatch && 
          <Req className={confirm.length? (requirements.confirmMatch? 'valid' : 'invalid') : ''}>
            <div className="icon"></div>
            Passwords Match
          </Req>
          }
        </ReqCol>
      </Requirements>
    </PasswordContainer>
  )
};

PasswordRequirements.defaultProps = {
  checkMatch: false, 
  password: "", 
  confirm: ""
};

PasswordRequirements.propTypes = {
  children: PropTypes.node.isRequired,
  password: PropTypes.string.isRequired,
  checkMatch: PropTypes.bool,
  confirm: PropTypes.string
};

export default PasswordRequirements;