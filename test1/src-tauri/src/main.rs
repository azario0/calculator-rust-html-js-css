#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn calculate(e: &str)->String{
    let ops = ['+', '-', '*', '/'];
    let values: Vec<f64> = e.split(&ops).map(|v| v.trim().parse().unwrap()).collect();
    let operands: Vec<_> = e.matches(&ops).collect();
    
    let (&(mut curr), values) = values.split_first().unwrap();
    for (op, &value) in operands.into_iter().zip(values) {
        match op {
            "+" => { curr = curr + value },
            "-" => { curr = curr - value },
            "*" => { curr = curr * value },
            "/" => { curr = curr / value },
            _ => unreachable!(),
        }
    }
    format!("{}", curr)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![calculate])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
