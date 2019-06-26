import {Component} from "preact";
import {MuteComponentState, SettingsComponentProps} from "../../utils/Interfaces";
import {useContext} from "preact/hooks";
import {Guild, Languages} from "../wrappers/Context";
import GuildRoleSelector from "./GuildRoleSelector";
import {get_info} from "../../utils/dashAPI";

export default class MuteComponent extends Component<SettingsComponentProps, MuteComponentState> {

    render() {
        const {value, setter, name, info, api_name, changed, disabled} = this.props;
        const {setup, cleaned} = this.state;
        const guild = useContext(Guild);

        const setupf = (event) => {
            event.preventDefault();
            this.setState({setup: true});
            get_info({
                method: "POST",
                endpoint: `guilds/${guild.id}/setup_mute`,
                body: {role: value}
            })
        };

        const cleanup = (event) => {
            event.preventDefault();
            this.setState({cleaned: true});
            get_info({
                method: "POST",
                endpoint: `guilds/${guild.id}/cleanup_mute`,
                body: {role: value}
            })
        };

        return (
            <div>
                <GuildRoleSelector value={value} setter={setter} name={name} info={info} changed={changed}
                                   api_name={api_name} disabled={disabled}/>

                <div class="field is-grouped">
                    <p class="control">
                        <button class="button is-light" disabled={disabled || this.state.setup} onclick={setupf}>
                            {this.state.setup ? "The bot has been signaled to setup the mute role" : "Execute mute role setup with this role"}
                        </button>
                    </p>
                    <p class="control">
                        <button class="button is-light" disabled={disabled || this.state.cleaned} onclick={cleanup}>
                            {this.state.cleaned ? "The bot has been signaled to cleanup all overrides with this role" : "Remove all channel overrides with this role"}
                        </button>
                    </p>
                </div>
            </div>

        );
    }
}