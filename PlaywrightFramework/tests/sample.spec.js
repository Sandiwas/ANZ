import { test, expect } from '@playwright/test'

test("My first test", async ({ page }) =>
 {
expect(12).toBe(12);
})  


test.skip("my Second test ", async function({page}){
    expect(100).toBe(100)
})

test("My Third test", async ({ page }) =>
 {
    expect(2.0).toBe(2.0)
})  

test("my Fourth test ", async function({page}){
    expect("Sandip Wasekar").toContain("Sandip");
})

test("my Fifth test ", async function({page}){
    expect(true).toBeTruthy();
})

test("my sixth test ", async function({ page}){
    expect(false).toBeFalsy();
})

test("my Seventh test ", async function({ page}){
    expect("Sandip Wasekar".includes("Sandip")).toBeTruthy();
}) 