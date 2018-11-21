export class Ticket {

    constructor(_id = '', name = '', depto = '', service = '', date = null, status = '') {

        this._id = _id;
        this.name = name;
        this.depto = depto;
        this.service = service;
        this.date = date;
        this.status = status;
    }
    _id: string;
    name: string;
    depto: string;
    service: string;
    date: Date;
    status: string;
}
