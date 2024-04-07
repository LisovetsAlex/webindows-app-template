import Button from "../components/Button";
import ButtonIcon from "../components/ButtonIcon";
import ButtonBar from "../components/ButtonBar";
import DividerVertical from "../components/DividerVertical";
import Icon from "../components/Icon";
import Input from "../components/Input";
import Text from "../components/Text";
import ButtonBase from "../components/ButtonBase";

function init() {
    const root = document.getElementsByTagName("body")[0];

    root.append(
        <ButtonBase>
            <ButtonBar>
                <Button text="File" disabled={false} />
                <Button text="Edit" disabled={false} />
                <Button text="View" disabled={true} />
                <Button text="Extra" disabled={true} />
                <Button text="?" disabled={true} />
            </ButtonBar>
            <ButtonBar>
                <ButtonIcon
                    src="Assets/Icons/progman.exe_14_143.ico"
                    text="Back"
                    disabled={false}
                />
                <Icon
                    src="Assets/Icons/progman.exe_14_144.ico"
                    disabled={false}
                />
                <Icon
                    src="Assets/Icons/webcheck.dll_14_114.ico"
                    height="16px"
                    width="16px"
                />
                <DividerVertical height="20px" />
                <ButtonIcon
                    src="Assets/Icons/explorer.exe_14_101.ico"
                    text="Search"
                    disabled={false}
                />
                <ButtonIcon
                    src="Assets/Icons/fde.dll_14_400.ico"
                    text="Folders"
                    disabled={false}
                />
                <ButtonIcon
                    src="Assets/Icons/snmpsnap.dll_14_6504.ico"
                    text="History"
                    disabled={false}
                />
                <DividerVertical height="20px" />
                <Icon
                    src="Assets/Icons/syncui.dll_14_126.ico"
                    height="16px"
                    width="16px"
                />
                <Icon
                    src="Assets/Icons/syncui.dll_14_127.ico"
                    height="16px"
                    width="16px"
                />
                <Icon
                    src="Assets/Icons/compstui.dll_14_64003.ico"
                    height="16px"
                    width="16px"
                />
            </ButtonBar>
            <ButtonBar gap="4px">
                <Text text="Address" />
                <Input
                    placeholder="Enter URL"
                    value="https://www.1up.win"
                    width="100%"
                />
                <ButtonIcon
                    src="Assets/Icons/progman.exe_14_144.ico"
                    text="Go"
                    disabled={false}
                />
            </ButtonBar>
        </ButtonBase>
    );
}

init();
