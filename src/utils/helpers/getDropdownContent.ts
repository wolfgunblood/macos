import DropdownItemType from "../../types/DropdownItemType";
import storeType from "../../types/store";

const getDropdownItems = (state: storeType) => {
let content: DropdownItemType[] = [];

switch (state.section) {
    case "logo":
        content = [
            {
                name: "About This MAC",
                available: true,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "System Preferences",
                available: true,
            },
            {
                name: "App Store",
                available: true,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Hide This Window",
                available: true,
            },
            {
                name: "Hide Others",
                available: true,
            },
            {
                name: "Show All",
                available: true,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Recent Times",
                available: true,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name:   "Force Quit",
                available: true,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Sleep",
                available: true,
            },
            {
                name: "Restart This Mac",
                available: true,
            },
            {
                name: "Shut Down",
                available: true,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Lock Screen",
                available: true,
            },
            {
                name: "Log Out",
                available: true,
            },

        ];
        break;
    case "finder":
        content = [
            {
            name: "About Finder",
            available: true,
            },
            {
              name: "divider",
              available: false,  
            },
            {
                name: "Preferences",
                available: true,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Empty Trash",
                available: true,  
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Hide Finder",
                available: true,
            },
            {
                name: "Hide Others",
                available: true,
            },
            {
                name: "Show All",
                available: true,
            }
        ];
        break;
    case "file":
        content =[
            {
                name: "New Finder Window",
                available: true,
            },
            {
                name: "New Foler",
                available: true,
            },
            {
                name: "New Tab",
                available: true,
            },
            {
                name: "Open",
                available: false,
            },
            {
                name: "Open With",
                available:  false,
            },
            {
                name: "Print",
                available: false,
            },
            {
                name: "Close Window",
                available: false,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Get Info",
                available: true,
            },
            {
                name: "Rename",
                available: false,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Duplicate",
                available: false,
            },
            {
                name: "Make Alias",
                available: false,
            },
            {
                name: "Quick Look",
                available: false,
            },
            {
                name: "Show Original",
                available: false,
            },
            {
                name: "Add to Sidebar",
                available: false,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Move to Trash",
                available: false,
            },
            {
                name: "Eject",
                available: false,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Find",
                available: false,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Tags",
                available: false,
            },
        ];
        break;

        case "edit" : 
        content = [
            {
                name: "Undo",
                available: false,
            },
            {
                name: "Redo",
                available: false,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Cut",
                available: false,
            },
            {
                name: "Copy",
                available: false,
            },
            {
                name: "Paste",
                available: false,
            },
            {
                name: "Select All",
                available: false,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Show Clipboard",
                available: false,
            },
            {
                name: "divider",
                available: false,
            },
            {
                name: "Start Dication",
                available: false,
            },
            {
                name: "Emoji & Symbols",
                available: true,
            },
        ]
        break;

        case "view":
            content = [
                {
                    name: "As Icons",
                    available: true,
                },
                {
                    name: "As List",
                    available: true,
                },
                {
                    name: "As Columns",
                    available: true,
                },
                {
                    name: "As Gallery",
                    available: true,
                },
                {
                    name: "divider",
                    available: false,
                },
                {
                    name: "Use Stacks",
                    available: false,
                },
                {
                    name: "Sort By",
                    available: false,
                },
                {
                    name: "Clean UP",
                    available: false,
                },
                {
                    name: "divider",
                    available: false,
                },
                {
                    name: "Hide Sidebar",
                    available: false,
                },
                {
                    name: "Show Preview",
                    available: false,
                },
                {
                    name: "divider",
                    available: false,
                },
                {
                    name: "Hide Toolbar",
                    available: false,
                },
                {
                    name: "Show All Tabs",
                    available: false,
                },
                {
                    name: "Show Tab Bar",
                    available: false,
                },
                {
                    name: "Show Status Bar",
                    available: false,
                },
                {
                    name: "Show Tab Bar in Full Screen",
                    available: false,
                },
                {
                    name: "divider",
                    available: false,
                },
                {
                    name: "Show View Options",
                    available: false,
                },
                {
                    name: "Show Preview Options",
                    available: false,
                },
                {
                    name: "divider",
                    available: false,
                },
                {
                    name: "Enter Full Screen",
                    available: false,
                },
            ];
            break;

            case "go":
                content = [ 
                    {
                        name: "Back",
                        available: false,
                    },
                    {
                        name: "Forward",
                        available: false,
                    },
                    {
                        name: "Enclosing Folder",
                        available: false,
                    },
                    {
                        name: "divider",
                        available: false,
                    },
                    {
                        name: "Recents",
                        available: false,
                    },
                    {
                        name: "Documents",
                        available: false,
                    },
                    {
                        name: "Desktop",
                        available: false,
                    },
                    {
                        name: "Downloads",
                        available: false,
                    },
                    {
                        name: "Home",
                        available: true,
                    },
                    {
                        name: "Computer",
                        available: true,
                    },
                    {
                        name: "Airdrop",
                        available: true,
                    },
                    {
                        name: "Network",
                        available: true,
                    },
                    {
                        name: "iCloud Drive",
                        available: true,
                    },
                    {
                        name: "Applications",
                        available: true,
                    },
                    {
                        name: "Utilities",
                        available: true,
                    },
                    {
                        name: "divider",
                        available: false,
                    },
                    {
                        name: "Go to folder",
                        available: false,
                    },
                    {
                        name: "Connect to Server",
                        available: false,
                    },
                ];
                break;
                case "window":
                    content = [
                        {
                            name: "Minimize",
                            available: false,
                        },
                        {
                            name: "Zoom",
                            available: false,
                        },
                        {
                            name: "Move Window to Left Side of the Screen",
                            available: false,
                        },
                        {
                            name: "Move Window to Right Side of the Screen",
                            available: false,
                        },
                        {
                            name: "Cycle Through Windows",
                            available: false,
                        },
                        {
                            name: "divider",
                            available: false,
                        },
                        {
                            name: "Show Previous Tab",
                            available: false,
                        },
                        {
                            name: "Show Next Tab",
                            available: false,
                        },
                        {
                            name: "Move Window to New Tab",
                            available: false,
                        },
                        {
                            name: "Merge Windows",
                            available: false,
                        },
                        {
                            name: "divider",
                            available: false,
                        },
                        {
                            name: "Bring All Windows to Front",
                            available: false,
                        },
                    ];
                    break;

                    case "help":
                        content = [
                            {
                                name: "Send Finder FeedBack",
                                available: false,
                            },
                            {
                                name: "divider",
                                available: false,
                            },
                            {
                                name: "macOS Help",
                                available: false,
                            },
                        ];
                        break;
}                   
return content;

};

export default getDropdownItems;