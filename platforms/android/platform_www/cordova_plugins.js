cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.q.users.cordova.Q.Users.Cordova",
        "file": "plugins/com.q.users.cordova/www/q_users_cordova.js",
        "pluginId": "com.q.users.cordova",
        "clobbers": [
            "Q.Users.Cordova"
        ]
    },
    {
        "id": "com.q.users.cordova.Q.Users.Cordova.md5",
        "file": "plugins/com.q.users.cordova/www/lib/md5.js",
        "pluginId": "com.q.users.cordova",
        "clobbers": [
            "Q.Users.Cordova.md5"
        ]
    },
    {
        "id": "com.q.users.cordova.Q.Users.Cordova.QGroupsError",
        "file": "plugins/com.q.users.cordova/www/lib/QGroupsError.js",
        "pluginId": "com.q.users.cordova",
        "clobbers": [
            "Q.Users.Cordova.QGroupsError"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "com.q.users.cordova": "0.0.2"
};
// BOTTOM OF METADATA
});