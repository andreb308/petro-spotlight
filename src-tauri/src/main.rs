#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;
use window_vibrancy::*;
use windows_version::*;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_spotlight::init(Some(
            tauri_plugin_spotlight::PluginConfig {
                windows: Some(vec![tauri_plugin_spotlight::WindowConfig {
                    label: String::from("main"),
                    shortcut: String::from("Ctrl+Shift+J"),
                    macos_window_level: None,
                }]),
                global_close_shortcut: Some(String::from("Escape")),
            },
        )))
        // .plugin(tauri_plugin_positioner::init())
        // // This is required to get tray-relative positions to work
        // .on_system_tray_event(|app, event| {
        //    tauri_plugin_positioner::on_tray_event(app, &event);
        // })
        .invoke_handler(tauri::generate_handler![greet])
        .setup(|app| {
            let window = app.get_window("secondary").unwrap();

            #[cfg(target_os = "macos")]
            {
                apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None)
                    .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");
            }

            #[cfg(target_os = "windows")]
            {
                let version = windows_version::OsVersion::current();

                if version.major > 10 || (version.major == 10 && version.build >= 22000) {
                    // This is Windows 11 or newer
                    apply_mica(&window, None).expect("Failed to apply mica effect");
                } else if version.major == 10 {
                    // This is Windows 10
                    apply_acrylic(&window, Some((1, 1, 1, 1)))
                        .expect("Failed to apply blur effect");
                } else {
                    apply_blur(&window, Some((18, 18, 18, 1)))
                        .expect("Failed to apply blur effect");
                }
            }

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
