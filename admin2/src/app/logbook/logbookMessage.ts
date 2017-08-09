export interface ILogbookMessage {
    id: number;     // ev_logbook
    log_type: number;
    text: string;
    fk_action_type: number;
    dauer: number;
    user_name: string;
    timestamp: string;
    day: string;
    id_1: number    // ev_logbook_message
    message_type: string;
    text_1: string;
    fk_logbook: number;
    timestamp_1: string;
    id_2: number;   // ev_action_type
    shortcut: string;
    name: string;
    description: string;
}
