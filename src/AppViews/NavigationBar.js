import { ButtonBarContainer, ButtonBar } from "@webindows/ButtonBars";
import Button from "@webindows/components/common/Button";
import DropdownItem from "@webindows/components/common/Dropdown/DropdownItem";
import createDropdown from "@webindows/components/common/Dropdown";

export default function NavigationBar() {
    return (
        <ButtonBarContainer>
            <ButtonBar>
                <Button
                    text="File"
                    disabled={false}
                    onClick={() => {
                        createDropdown("App_FileBtn", "App_FileDD", [
                            <DropdownItem
                                text="New File"
                                onClick={() => {
                                    console.log("New File");
                                }}
                            />,
                            <DropdownItem
                                text="Open File"
                                onClick={() => {
                                    console.log("Open File");
                                }}
                            />,
                        ]);
                    }}
                />
                <Button
                    text="Edit"
                    disabled={false}
                    onClick={() => {
                        createDropdown("App_EditBtn", "App_EditDD", [
                            <DropdownItem
                                text="Undo"
                                onClick={() => {
                                    console.log("Undo");
                                }}
                            />,
                            <DropdownItem
                                text="Redo"
                                onClick={() => {
                                    console.log("Redo");
                                }}
                            />,
                        ]);
                    }}
                />
                <Button text="View" disabled={true} />
                <Button text="Extra" disabled={true} />
                <Button text="?" disabled={true} />
            </ButtonBar>
        </ButtonBarContainer>
    );
}
