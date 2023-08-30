// Configuration interface using an index signature
interface AppConfig {
    [moduleName: string]: {
        enabled: boolean;
        settings: Record<string, any>;
    };
}

// Sample configuration data
const appConfig: AppConfig = {
    "moduleA": {
        enabled: true,
        settings: {
            theme: "light",
            fontSize: 16,
        },
    },
    "moduleB": {
        enabled: false,
        settings: {
            debugMode: true,
        },
    },
};

// Function to retrieve settings for a specific module
function getModuleSettings(moduleName: string): Record<string, any> | undefined {
    const moduleConfig = appConfig[moduleName];
    return moduleConfig ? moduleConfig.settings : undefined;
}

// Usage
const settingsForModuleA = getModuleSettings("moduleA");
if (settingsForModuleA) {
    console.log("Module A settings:", settingsForModuleA);
} else {
    console.log("Module A not found in configuration.");
}
