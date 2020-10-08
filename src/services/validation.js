import * as Yup from 'yup';

export const passwordRegExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/g);
export const passwordRequirements = Yup.string().matches(passwordRegExp, "Please fulfill all password requirements");