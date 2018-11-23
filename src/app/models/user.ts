export class User {
    constructor(
        public _id: number = null,
        public first_name: string = '',
        public last_name: string = '',
        public email: string = '',
        public password: string = '',
        public job: string = '',
        public depto: string= '',
        public numEmp: number = null
        ) {}

}
