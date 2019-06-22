export interface User {
    id: string
    name: string
    discriminator: string
    globalAdmin: boolean
}

export interface UserHolder {
    user?: User
}

export interface AppState {
    currentUrl: string;
    user: User;
    languages: LangMap;
}

export interface HeaderProps {
    user?: User;
}

export interface HeaderState {
    menuActive: boolean
}

export interface BasicGuildInfo {
    id: string
    name: string;
    permissions: number;
    icon: string;
}

export interface GuildMap {
    [guid: string]: BasicGuildInfo
}

export interface GuildProps {
    guild: BasicGuildInfo;
}

export interface GuildRouteProps {
    gid: string;
    tab?: string;
}

export interface GuildRouteState {
    guild: DetailedGuildInfo;
    loading: boolean;
    authorized: boolean;
}

export interface GuildListRouteState {
    guilds: GuildMap;
}

export interface Owner {
    id: string;
    name: string;
}

export interface Emoji {
    id: string;
    name: string;
    color: number
}

export interface Statuses {
    online: number;
    idle: number;
    dnd: number;
    offline: number;
}

export interface Role {
    id: string;
    name: string;
    color: number;
    members: number
}

export interface DetailedGuildInfo {
    id: string;
    name: string;
    server_icon: string;
    owner: Owner;
    members: number;
    text_channels: number;
    voice_channels: number;
    creation_date: string;
    age_days: number;
    vip_features: string[];
    role_list: Role[]
    emojis: Emoji[];
    member_statuses: Statuses;
    user_perms: number
}

export interface NavProps {
    tab: string;
}

export interface GeneralSettings {
    LANG: string;
    NEW_USER_THRESHOLD: number;
    PERM_DENIED_MESSAGE: boolean;
    PREFIX: string;
    TIMESTAMPS: boolean
    TIMEZONE: string
}

export interface LangMap {
    [code: string]: string
}

export interface LoadingInterface {
    loading: boolean
}

export interface GuildSettingsGeneralState extends LoadingInterface{
    old_values: GeneralSettings;
    new_values: GeneralSettings;
}

export interface SettingsComponentProps {
    value: any;
    setter: any;
    name: string;
    info: string;
    changed: boolean;
    api_name: string;
}

export interface ValidatingSettingsComponentProps extends SettingsComponentProps{
    validator: any;
}

export interface RangedIntComponentProps extends SettingsComponentProps{
    min: number;
    max: number
}