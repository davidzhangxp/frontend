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
export const title_list = [
    {value:'ticket_number',checked:true},
    {value:'server_sn',checked:true},
    {value:'ip',checked:false},
    {value:'start_date',checked:true},
    {value:'close_date',checked:true},
    {value:'product_name',checked:true},
    {value:'model',checked:true},
    {value:'location',checked:true},
    {value:'failure_type',checked:true},
    {value:'if_change_part',checked:false},
    {value:'foxconn_pn',checked:false},
    {value:'old_manufacture',checked:false},
    {value:'old_part_pn',checked:false},
    {value:'new_manufacture',checked:false},
    {value:'new_pn',checked:false},
    {value:'old_part_sn',checked:false},
    {value:'good_part_sn',checked:false},
    {value:'part_position',checked:true},
    {value:'error_description',checked:true},
    {value:'feedback',checked:false},
    {value:'tech',checked:true},
    {value:'repair_date',checked:false},
    {value:'period',checked:false},
    {value:'status',checked:true},
    {value:'requester',checked:true},
    {value:'notes',checked:true},
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

