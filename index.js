const frameStrings = [
  '<iframe src="https://drive.google.com/file/d/13GGqgbbF_gkBaKnhPt8TY8yM28Ir740b/preview" width="640" height="480" allow="autoplay"></iframe>',
  '<iframe src="https://drive.google.com/file/d/1o22ehAbs4_UILUVPv3xqvnZkWTglAPfn/preview" width="640" height="480" allow="autoplay"></iframe>',
  '<iframe src="https://drive.google.com/file/d/1TQBErcCaFRDPzqSBq9lZRV1ZlrtAfHMw/preview" width="640" height="480" allow="autoplay"></iframe>',
  '<iframe src="https://drive.google.com/file/d/1A9zAkT1y3_Ag_FxubaWvmEHjnDQj3tQX/preview" width="640" height="480" allow="autoplay"></iframe>',
  '<iframe src="https://drive.google.com/file/d/1ET6tBJ7pNWMZy1hZKvAEXcHLo7Kj8Vjh/preview" width="640" height="480" allow="autoplay"></iframe>',
  '<iframe src="https://drive.google.com/file/d/1oWpVuP3G-ME7LR_gr4cGiDH23b0-JV9X/preview" width="640" height="480" allow="autoplay"></iframe>',
  '<iframe src="https://drive.google.com/file/d/15G5JWRR-Gm_68g9b0S6DwvEuPJXsnghI/preview" width="640" height="480" allow="autoplay"></iframe>',
  '<iframe src="https://drive.google.com/file/d/1C_w4yVstQq86Hx0wzn4wLya8jXudEt8N/preview" width="640" height="480" allow="autoplay"></iframe>',

  '<iframe src="https://drive.google.com/file/d/129tuYHkoGUi6BlBQL8m2ZZ1a7SgBOuzs/preview" width="640" height="480" allow="autoplay"></iframe>',
];

const uploadVideos = async () => {
  for (let i = 0; i < frameStrings.length; i++) {
    const formData = new URLSearchParams();
    formData.append("_tutor_nonce", "e1f9ea481a");
    formData.append("_wp_http_referer", "/wp-admin/admin-ajax.php");
    formData.append("action", "tutor_modal_create_or_update_lesson");
    formData.append("lesson_id", "0");
    formData.append("current_topic_id", "19478");
    formData.append("lesson_title", `+ Unit ${i + 1}`);
    formData.append("tutor_lesson_modal_editor", "");
    formData.append("_lesson_thumbnail_id", "");
    formData.append("video[source]", "embedded");
    formData.append("video[source_video_id]", "");
    formData.append("video[poster]", "");
    formData.append("video[source_external_url]", "");
    formData.append("video[source_shortcode]", "");
    formData.append("video[source_youtube]", "");
    formData.append("video[source_vimeo]", "");
    formData.append("video[source_embedded]", frameStrings[i]);
    formData.append("video[runtime][hours]", "00");
    formData.append("video[runtime][minutes]", "00");
    formData.append("video[runtime][seconds]", "00");
    formData.append("lesson_content", "");
    formData.append("is_html_active", "false");

    try {
      const response = await fetch(
        "https://poto.edu.vn/wp-admin/admin-ajax.php",
        {
          method: "POST",
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9,vi;q=0.8",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest",
            cookie:
              "wordpress_sec_bfa98b0ed82c402d29d3a4a75f265306=admin_oxu7olz8%7C1725502630%7C2HwaqA3je57KUlAu0CsBfVJjUwlTswuZjhoQCj9Qxqh%7C5c50341683403f5355dd1a23a25c0149be04a4a5fbfa73988d6738021e0cf500; wp-settings-1=editor%3Dtinymce%26libraryContent%3Dbrowse%26hidetb%3D1%26imgsize%3Dfull%26editor_plain_text_paste_warning%3D1; wp-settings-time-1=1725005153; wordpress_test_cookie=WP%20Cookie%20check; tk_ai=woo%3Ah2UVVJttgiJaWyrYqBh1EEQq; wordpress_logged_in_bfa98b0ed82c402d29d3a4a75f265306=admin_oxu7olz8%7C1725502630%7C2HwaqA3je57KUlAu0CsBfVJjUwlTswuZjhoQCj9Qxqh%7C371bd4aa62e6c9f9af6a5fbfeb7cca4381704dc70867854c5327aa016c2c57f0",
          },
          body: formData,
        }
      );
      const data = await response.json();
      console.log(`Video ${i + 1} uploaded:`, data);
    } catch (error) {
      console.error(`Error uploading video ${i + 1}:`, error);
    }
  }
};

uploadVideos();
