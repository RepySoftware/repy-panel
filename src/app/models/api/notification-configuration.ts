import { ApiModel } from "../abstraction/api-model";

export interface NotificationConfiguration extends ApiModel {

    lastNotification: string;
    minNotificationIntervalMinutes: number;
    phonesToNotify: string[];
    emailsToNotify: string[];
    alreadyNotified: boolean;
    isActive: boolean;
}