import {Model, Collection} from 'js-abstract-model'

class User extends Model {

    constructor(user) {
        super(user, [
            {key: 'id'},
            {key: 'first_name',
                value: function (itemVal, inputData) {
                    if (typeof inputData.first_name !== 'undefined' && inputData.first_name !== null) {
                        return inputData.first_name;
                    } else if (typeof inputData.firstName !== 'undefined' && inputData.firstName !== null) {
                        return inputData.firstName;
                    } else {
                        return null;
                    }
                }
            },
            {key: 'last_name',
                value: function (itemVal, inputData) {
                    if (typeof inputData.last_name !== 'undefined' && inputData.last_name !== null) {
                        return inputData.last_name;
                    } else if (typeof inputData.lastName !== 'undefined' && inputData.lastName !== null) {
                        return inputData.lastName;
                    } else {
                        return null;
                    }
                }
            },
            {key: 'full_name'},
            {key: 'mobile'},
            {key: 'phone'},
            {key: 'national_code',
                value: function (itemVal, inputData) {
                    if (typeof inputData.national_code !== 'undefined' && inputData.national_code !== null) {
                        return inputData.national_code;
                    } else if (typeof inputData.nationalCode !== 'undefined' && inputData.nationalCode !== null) {
                        return inputData.nationalCode;
                    } else {
                        return null;
                    }
                }
            },
            {key: 'nationalCode'},
            {key: 'email'},
            {
                key: 'province',
                default: {
                    id: null,
                    title: ''
                }
            },
            {
                key: 'city',
                default: {
                    id: null,
                    title: ''
                }
            },
            {key: 'school'},

            {key: 'address'},
            {key: 'role'},
            {key: 'photo'},
            {key: 'birthdate'},
            {key: 'postalCode'},
            {key: 'completion', default: 0},

            {key: 'created_at'},
            {key: 'updated_at'},

            {key: 'shahr'},
            {key: 'shahr_id'}
        ]);

        let that = this;
        this.apiResource = {
            fields: [
                {
                    key: 'url_key',
                    value: function () {
                        return 'user';
                    }
                },
                {key: 'id'},
                {
                    key: 'firstName',
                    value: function () {
                        return that.first_name;
                    }
                },
                {
                    key: 'lastName',
                    value: function () {
                        return that.last_name;
                    }
                },
                {
                    key: 'shahr_id',
                    value: function () {
                        if (that.shahr && that.shahr.id !== null && typeof that.shahr.id !== 'undefined') {
                            return that.shahr.id;
                        } else {
                            return that.shahr_id;
                        }
                    }
                },
                {key: 'email'},
                {key: 'province'},
                {key: 'city'},
                {key: 'school'},
                {key: 'address'},
                {key: 'birthdate'},
                {
                    key: 'updateType',
                    value: function () {
                        return 'profile';
                    }
                },
                {
                    key: 'major_id',
                    value: function () {
                        return that.major.id;
                    }
                },
                {
                    key: 'gender_id',
                    value: function () {
                        return that.gender.id;
                    }
                },
                {
                    key: 'grade_id',
                    value: function () {
                        return that.grade.id;
                    }
                },
                {
                    key: 'educationalBase_id',
                    value: function () {
                        return that.educational_base.id;
                    }
                }
            ]
        };

        this.setFullName();

    }

    getUncompletedFields (necessaryFields = ['first_name', 'last_name']) {
        const uncompletedFields = []
        necessaryFields.forEach((field) => {
            if (typeof this[field] === 'string' && this[field] !== '') {
                return
            }
            if (this[field] && this[field].id !== null) {
                return
            }
            uncompletedFields.push(field)
        })
        return uncompletedFields
    }

    isUserInfoCompleted (necessaryFields = null) {
        if (necessaryFields) {
            return !this.getUncompletedFields(necessaryFields).length
        }
        return !this.getUncompletedFields().length
    }

    setFullName() {
        if (this.first_name !== null && this.last_name !== null) {
            this.full_name = this.first_name + ' ' + this.last_name;
        }
    }

    convertToValidValue(buffer) {
        let validatedKeys = [];
        if (!this.major.isValid()) {
            validatedKeys.push('major');
        }
        if (!this.gender.isValid()) {
            validatedKeys.push('gender');
        }
        if (!this.hasValidNationalCode()) {
            validatedKeys.push('nationalCode');
        }
        if (!this.hasValidMobile()) {
            validatedKeys.push('mobile');
        }
        if (!this.hasValidProvince()) {
            validatedKeys.push('province');
        }
        if (!this.hasValidCity()) {
            validatedKeys.push('city');
        }

        if (typeof buffer !== 'undefined' && buffer) {
            this.buffer();
            this.buffer([
                {
                    key: 'major',
                    value: this.major.convertToValidValue(true),
                },
                {
                    key: 'educational_base',
                    value: this.educational_base.convertToValidValue(true),
                },
                {
                    key: 'grade',
                    value: this.grade.convertToValidValue(true),
                },
                {
                    key: 'gender',
                    value: this.gender.convertToValidValue(true),
                },
                {
                    key: 'nationalCode',
                    value: this.convertNationalCodeToValidValue(true),
                },
                {
                    key: 'mobile',
                    value: this.convertMobileToValidValue(true),
                }
            ]);
        } else {
            this.major.convertToValidValue();
            this.educational_base.convertToValidValue();
            this.grade.convertToValidValue();
            this.gender.convertToValidValue();
            this.convertNationalCodeToValidValue();
            this.convertMobileToValidValue();
        }


        return validatedKeys;
    }

    hasValidMajor() {
        return this.major.isValid();
    }

    hasValidGrade() {
        return this.grade.isValid();
    }

    hasValidEducationalBase() {
        return this.educational_base.isValid();
    }

    hasValidGender() {
        return this.gender.isValid();
    }

    hasValidMobile(input) {
        let mobile = this.mobile;
        if (typeof input !== 'undefined') {
            mobile = input;
        }
        let patt = /^09\d{9}$/g;
        return patt.test(mobile);
    }

    hasValidPostalCode(input) {
        let postalCode = this.postalCode;
        if (typeof input !== 'undefined') {
            postalCode = input;
        }

        return (!isNaN(postalCode) && postalCode !== null && postalCode.length === 10);
    }

    convertMobileToValidValue(buffer) {
        let validData = this.mobile;
        if (!this.hasValidMobile()) {
            if (this.mobile !== null && this.mobile.trim().length < 11) {
                validData = this.mobile.trim().padStart(11, '0');
                if (!this.hasValidMobile(validData)) {
                    validData = null;
                }
            } else {
                validData = null;
            }
        }

        if (typeof buffer !== 'undefined' && buffer) {
            return validData;
        } else {
            this.mobile = validData;
        }
    }

    convertNationalCodeToValidValue(buffer) {
        let validData = this.nationalCode;
        if (!this.hasValidNationalCode()) {
            if (this.nationalCode !== null && this.nationalCode.trim().length < 10) {
                validData = this.nationalCode.trim().padStart(10, '0');
                if (!this.hasValidNationalCode(validData)) {
                    validData = null;
                }
            } else {
                validData = null;
            }
        }

        if (typeof buffer !== 'undefined' && buffer) {
            return validData;
        } else {
            this.nationalCode = validData;
        }
    }

    hasValidNationalCode(input) {
        let nationalCode = this.nationalCode;
        if (typeof input !== 'undefined') {
            nationalCode = input;
        }
        if (!/^\d{10}$/.test(nationalCode))
            return false;

        let check = parseInt(nationalCode[9]),
            sum = 0;
        for (let i = 0; i < 9; ++i) {
            sum += parseInt(nationalCode[i]) * (10 - i);
        }
        sum %= 11;

        return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
    }

    hasValidProvince(input) {
        let province = this.province;
        if (typeof input !== 'undefined') {
            province = input;
        }
        if (isNaN(province.id)) {
            return false
        }

        return true
    }

    hasValidCity(input) {
        let city = this.city;
        if (typeof input !== 'undefined') {
            city = input;
        }
        if (isNaN(city.id)) {
            return false
        }

        return true
    }

    hasData() {
        return (this.id !== null);
    }

    getOrders() {
        let url = this.actionUrl + '/' + this.id + '/orders';
        return this.crud.read(url);
    }
}

class UserList extends Collection {
    model() {
        return User;
    }
}

// export default User;
export {User, UserList};
