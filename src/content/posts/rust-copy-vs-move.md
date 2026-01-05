---
title: "WIP: Copy vs Move in Rust"
description: "Understanding Rust ownership through compiler errors"
date: 2026-01-05
tags: ["Rust"]
---

# WIP!!!!

Now I'm a Rust beginner.\
This is a personal note about the difference between **Copy(コピー)** and **Move(ムーブ)**.

---

## The conclusion first
In Rust, values are handled in one of two ways:

- **Copy**: the value is duplicated
- **Move**: ownership of the value is transferred

Which one happens is determined **at compile time, by the type(型)**.

---

## A Copy example

```rust
let a = 10;
let b = a;

println!("{}", a); // OK
```

Primitive numeric types such as `i32` implement the `Copy` trait.

<details>
<summary>Notes</summary>

---

A trait(トレイト) represents a specification of behavior. Because Rust does not support class inheritance(継承), traits are the primary way to define and share behavior among types.

---
</details>

Characteristics:

- Fixed size
- Stored on the stack
- Safe to copy bit-by-bit

Because of this, assigning `a` to `b` does not invalidate `a`.


## A Move example (the first pitfall)

```rust
let s = String::from("hello");
let t = s;

println!("{}", s); // compile error
```

At this point, `s` can no longer be used.

Reason:

- `String` does not implement `Copy`
- Assignment transfers ownership from `s` to `t`

Official reference:
- https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#ways-variables-and-data-interact-move

## Why `String` is not Copy

Internally, a `String` consists of:

- A pointer to heap-allocated data
- Length
- Capacity

If Rust allowed a shallow copy:

- Multiple variables would point to the same heap memory
- Deallocation timing would become ambiguous
- Double-free bugs would be possible

Rust avoids this not with a garbage collector,
but by **preventing the situation at the language design level**.

Official reference:
- https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap

## How Copy vs Move is decided

The rule is simple:

- If a type implements `Copy` → Copy
- Otherwise → Move

```rust
#[derive(Copy, Clone)]
struct Point {
  x: i32,
  y: i32,
}
```

This struct is Copy because all of its fields are Copy.

However, if any field is a `String` or other non-Copy type,
the struct itself cannot be Copy.

Official reference:
- https://doc.rust-lang.org/book/appendix-03-derivable-traits.html

## What `clone()` actually does

```rust
let s = String::from("hi");
let t = s.clone();
```

`clone()` performs an explicit deep copy:

- Heap allocation included
- Cost is not hidden
- Intent is visible in the code

This is why Rust makes `clone()` explicit and noisy.

Official reference:
- https://doc.rust-lang.org/std/clone/trait.Clone.html

Personal rule:
- Only call `clone()` when I can explain why it is necessary

## Copy and Move in function arguments

```rust
fn takes_string(s: String) {}
fn takes_ref(s: &String) {}
```

- Passing by value → Move
- Passing by reference → no Move

Function calls are **not** ownership-safe boundaries.
Arguments follow the same ownership rules as assignments.

Official reference:
- https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html

## A common compiler error

```text
value borrowed here after move
```

This means:

- The value was moved
- And then used again afterward

Rust’s compiler errors are unusually descriptive.
Treat them as part of the language documentation.

## Notes to my future self

- Copy is the exception, Move is the default
- Always question ownership when seeing `=`
- `clone()` is an escape hatch, not a habit
- Compiler errors are guidance, not obstacles

Rust is strict,
but that strictness exists to make invalid states unrepresentable.
