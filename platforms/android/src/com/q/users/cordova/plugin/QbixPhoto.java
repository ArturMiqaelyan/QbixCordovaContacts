package com.q.users.cordova.plugin;

import org.json.JSONObject;

public class QbixPhoto {

    Number photoFileId;
    String photo;   //base64

    public JSONObject toJson() {
        try {
            JSONObject jsonPhoto = new JSONObject();
            jsonPhoto.put("photoFileId", photoFileId);
            jsonPhoto.put("photo", photo);
            return jsonPhoto;
        } catch (Exception e) {
            return null;
        }
    }
}
