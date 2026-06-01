# Images

Drop your own images here, then point to them in `src/data/portfolio.ts`.

| Slot              | Data field            | Suggested size | Used in          |
| ----------------- | --------------------- | -------------- | ---------------- |
| Profile photo     | `profile.avatar`      | 400×400 (1:1)  | Hero card        |
| About portrait    | `profile.aboutImage`  | 640×760 (4:5)  | About section    |
| Project thumbnail | `project.image`       | 800×450 (16:9) | Project cards    |

## How to use your own image

1. Add a file here, e.g. `public/images/me.jpg`.
2. Update the path in `src/data/portfolio.ts`:

   ```ts
   avatar: "/images/me.jpg",
   ```

Any web format works (`.jpg`, `.png`, `.webp`, `.svg`, or a full remote URL).
If a path is empty or the file can't be loaded, the site automatically shows a
styled placeholder (initials for the avatar, a gradient banner for projects),
so nothing ever looks broken.

The `*.svg` files currently in this folder are placeholders — replace them.
