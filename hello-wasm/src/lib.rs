extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    let mut result: String = "prefix_".to_owned();
    result.push_str(name);

    return result;
}
