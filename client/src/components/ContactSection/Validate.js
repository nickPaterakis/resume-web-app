const validate = (value, rules) => {

    for (let rule in rules) {
    
        switch (rule) {
            case 'minLength': {
                if (minLengthValidator(value, rules[rule])) 
                    break;
                else 
                    return {valid: false, errorMessage: 'You need to type ' + rules[rule] + ' characters'};

            }
            case 'isRequired':{ 
                if (requiredValidator(value)) 
                    break;
                else 
                    return  {valid: false, errorMessage: 'You should fill this field'} ;
            }
            case 'isEmail':{ 
                if (emailValidator(value)) 
                    break;
                else 
                    return  {valid: false, errorMessage: 'Your email isn\'t right'};
            }
            default:;
        }
    }

    return { valid: true, errorMessage: ''};
}

/**
 * minLength Val
 * @param  value 
 * @param  minLength
 * @return          
 */
const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
}

/**
 * Check to confirm that feild is required
 * 
 * @param  value 
 * @return       
 */
const requiredValidator = value => {
    return value.trim() !== '';	
}

/**
 * Email validation
 * 
 * @param value
 * @return 
 */
const emailValidator = value => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

export default validate;

