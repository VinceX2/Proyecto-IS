export class Ticket {

    constructor(_id = '', name = '', depto = '', asunto = '', message = '', date = null, status = '') {

        this._id = _id;
        this.name = name;
        this.depto = depto;
        this.asunto = asunto;
        this.message = message;
        this.date = date;
        this.status = status;
    }
    _id: string;
    name: string;
    depto: string;
    asunto: string;
    message: string;
    date: Date;
    status: string;
}
