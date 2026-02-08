## 🛠️ Summary
- **Revert:** Rolled back the text color changes in `BlogPost.astro` to the original `text-neutral-300` and `text-neutral-400`.
- **Reason:** The attempt to support light mode broke dark mode visibility (the primary theme).
- **Goal:** Restore the original (working) dark mode colors first. Light mode adjustments can be applied later via global CSS variables or careful utility classes.

## 🔍 Type of Change
- [x] 🐛 Fix (Revert to working state)

## ✅ Verification
- [x] Verified code matches the pre-lightmode state.
