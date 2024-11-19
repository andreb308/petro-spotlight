#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;
use window_vibrancy::*;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_spotlight::init(Some(tauri_plugin_spotlight::PluginConfig {
            windows: Some(vec![
                tauri_plugin_spotlight::WindowConfig {
                    label: String::from("main"),
                    shortcut: String::from("Ctrl+Shift+J"),
                    macos_window_level: None,
                },
            ]),
            global_close_shortcut: Some(String::from("Escape")),
        })))
        // .plugin(tauri_plugin_positioner::init())
        // // This is required to get tray-relative positions to work
        // .on_system_tray_event(|app, event| {
        //    tauri_plugin_positioner::on_tray_event(app, &event);
        // })
        .invoke_handler(tauri::generate_handler![greet])
        
        
        .setup(|app| {
            let window = app.get_window("secondary").unwrap();

            #[cfg(target_os = "macos")]
            apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None)
                .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

            #[cfg(target_os = "windows")]
            apply_blur(&window, Some((18, 18, 18, 10)))
                .expect("Unsupported platform! 'apply_blur' is only supported on Windows");            // app.set_activation_policy(tauri::ActivationPolicy::Accessory);
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
