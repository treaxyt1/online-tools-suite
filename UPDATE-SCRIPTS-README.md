# Tool Page Bulk Update Scripts

This directory contains scripts to automatically update all tool pages from the old design to the new sidebar layout.

## Available Scripts

### 1. PowerShell Script (`update-tools.ps1`)
**Best for:** Windows users who prefer PowerShell

**Usage:**
```powershell
# Run from the project root directory
.\update-tools.ps1
```

### 2. Python Script (`update-tools.py`)
**Best for:** Cross-platform compatibility and more robust HTML parsing

**Requirements:**
- Python 3.6 or higher (no additional packages needed)

**Usage:**
```bash
# Run from the project root directory
python update-tools.py
```

## What These Scripts Do

Both scripts perform the following updates automatically:

1. **CSS Update**: Changes `css/style.css` → `css/design-system.css`

2. **Header Replacement**: Replaces old header with new component-based header
   ```html
   <!-- Old -->
   <header class="header">
     <div class="container header-inner">...</div>
   </header>
   
   <!-- New -->
   <header class="header"></header>
   ```

3. **Sidebar Layout**: Adds new sidebar layout structure
   ```html
   <div class="tool-layout">
     <aside class="tool-sidebar" id="tool-sidebar"></aside>
     <main class="tool-main">...</main>
   </div>
   ```

4. **Remove Breadcrumbs**: Removes old breadcrumb navigation (now in sidebar)

5. **Tool Header Update**: Modernizes tool header with icon and improved styling

6. **Component Initialization**: Adds JavaScript to render header, sidebar, and footer components

7. **Mobile Toggle**: Adds mobile sidebar toggle button

8. **Footer**: Adds footer component placeholder

9. **Branding Update**: Updates URLs and branding from "OnlineToolFree" to "OnlineToolFree"

## Safety Features

- **Automatic Backups**: Creates `.backup` files for all processed files
- **Skip Already Updated**: Automatically skips files that already use `design-system.css`
- **Error Recovery**: Restores from backup if an error occurs during processing
- **Detailed Logging**: Shows progress and results for each file

## After Running

1. **Review Changes**: Check a few updated files to ensure they look correct
2. **Test Functionality**: Test some tools to ensure JavaScript still works
3. **Delete Backups**: Once satisfied, delete all `.backup` files:
   ```powershell
   # PowerShell
   Get-ChildItem -Path .\tools -Recurse -Filter "*.backup" | Remove-Item
   ```
   ```bash
   # Bash/Linux
   find ./tools -name "*.backup" -delete
   ```

## Rollback

If you need to rollback changes:

```powershell
# PowerShell - Restore all backups
Get-ChildItem -Path .\tools -Recurse -Filter "*.backup" | ForEach-Object {
    $original = $_.FullName -replace '\.backup$', ''
    Copy-Item $_.FullName $original -Force
}
```

```bash
# Bash - Restore all backups
find ./tools -name "*.backup" -exec sh -c 'cp "$1" "${1%.backup}"' _ {} \;
```

## Expected Results

After running the script, you should see output like:

```
Found 104 files to update

[1/104] Processing: tools/text/find-replace.html
  ✓ Updated successfully
[2/104] Processing: tools/text/regex-tester.html
  ✓ Updated successfully
...

============================================================
Update Complete!
============================================================
✓ Updated: 102 files
⊘ Skipped: 2 files (already updated)
✗ Errors:  0 files
```

## Manual Review Needed

After running the script, you may want to manually review and adjust:

1. **Tool Icons**: The script uses a generic document icon. You may want to customize icons for each tool.
2. **Max Width**: Default is 900px, but some tools might need different widths (e.g., diff checker uses 1000px).
3. **Special Layouts**: Tools with unique layouts (like color picker, UUID generator) may need manual tweaking.
4. **Custom Styles**: Any tool-specific CSS should be preserved but may need adjustment.

## Troubleshooting

**Script doesn't find files:**
- Make sure you're running from the project root directory
- Check that the `tools` directory exists

**Permission errors:**
- Run PowerShell as Administrator (Windows)
- Use `chmod +x update-tools.py` (Linux/Mac)

**Encoding issues:**
- The scripts use UTF-8 encoding by default
- If you see garbled characters, check your file encoding

## Need Help?

If you encounter issues:
1. Check the error messages in the script output
2. Look at the `.backup` files to see what changed
3. Manually update a single file first to understand the pattern
4. Restore from backups if needed

---

**Note:** These scripts are designed to handle the most common tool page structures. Some pages with highly customized layouts may require manual adjustment after running the script.
