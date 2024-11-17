export interface Ticket {
    id: string;
    ticket_number: string;
    server_sn:string;
    ip:string;
    start_date:string;
    close_date?:string;
    product_name:string;
    model:string;
    location:string;
    failure_type:string;
    if_change_part:string;
    foxconn_pn?:string;
    old_manufacture?:string;
    old_part_pn?:string;
    new_manufacture?:string;
    new_pn?:string;
    old_part_sn?:string;
    good_part_sn?:string;
    part_position?:string;
    error_description?:string;
    feedback?:string;
    tech?:string;
    repair_date?:string;
    period?:string;
    status:string;
    requester:string;
    notes?:string;
    initial_stock_status?:string;
    foxconn_china_or_us?:string;
    platform?:string;
    ot_reason?:string;
    hhpn?:string

}

export interface User{
    name:string;
    email:string | null | undefined;
    password:string | null | undefined;
    isAdmin?:Boolean
}

export const report_titles: string[] = [
   
        "ticket_number",
        "server_sn",
        "ip",
        "start_date",
        "close_date",
        "product_name",
        "model",
        "location",
        
        "failure_type"
        
]

export const tickets_list:Ticket[] = [
    {    id: '1',
        ticket_number: '123',
        server_sn:'Ex321',
        ip:'1234556',
        start_date:'10-21-2024',
        close_date:'10-31-2024',
        product_name:'ss',
        model:'r240',
        location:'us-alt-j30',
        failure_type:'disk',
        if_change_part:'Y',
        foxconn_pn:'',
        old_manufacture:'',
        old_part_pn:'',
        new_manufacture:'',
        new_pn:'',
        old_part_sn:'',
        good_part_sn:'',
        part_position:'',
        error_description:'',
        feedback:'',
        tech:'zihao',
        repair_date:'',
        period:'',
        status:"Confirm Closed",
        requester:"asia",
        notes:'foxconn',
        initial_stock_status:'out of stock',
        foxconn_china_or_us:'',
        platform:'',
        ot_reason:'',
        hhpn:''
    },
    {    id: '2',
        ticket_number: '234123',
        server_sn:'Ex321',
        ip:'1234556',
        start_date:'10-21-2024',
        close_date:'10-31-2024',
        product_name:'ss',
        model:'r240',
        location:'us-alt-j30',
        failure_type:'disk',
        if_change_part:'N',
        foxconn_pn:'',
        old_manufacture:'',
        old_part_pn:'',
        new_manufacture:'',
        new_pn:'',
        old_part_sn:'',
        good_part_sn:'',
        part_position:'',
        error_description:'',
        feedback:'',
        tech:'zihao',
        repair_date:'',
        period:'',
        status:"Confirm Closed",
        requester:"asia",
        notes:'foxconn',
        initial_stock_status:'out of stock',
        foxconn_china_or_us:'',
        platform:'',
        ot_reason:'',
        hhpn:''
    }
]

