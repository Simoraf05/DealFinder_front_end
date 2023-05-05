import React from 'react'
import '../styles/sidebar.css'


const SideBare = () => {
  return (
    <div>
        <div class="sidebar">
            <div class="logo_content">
            <div class="logo">
                <div class="logo_name">Code4education</div>
            </div>
            <i class='bx bx-menu' id="btn"></i>
            </div>
            <ul class="nav_list">
            <li>
                <i class='bx bx-search'></i>
                <input type="text" placeholder="Search..."/>
                <span class="tooltip">Search</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-grid-alt'></i>
                <span class="links_name">Dashboard</span>
                </a>
                <span class="tooltip">Dashboard</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-user'></i>
                <span class="links_name">User</span>
                </a>
                <span class="tooltip">User</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-chat'></i>
                <span class="links_name">Messages</span>
                </a>
                <span class="tooltip">Messages</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-pie-chart-alt-2'></i>
                <span class="links_name">Analytics</span>
                </a>
                <span class="tooltip">Analytics</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-folder'></i>
                <span class="links_name">File Manager</span>
                </a>
                <span class="tooltip">File Manager</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-cart-alt'></i>
                <span class="links_name">Order</span>
                </a>
                <span class="tooltip">Order</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-heart'></i>
                <span class="links_name">Saved</span>
                </a>
                <span class="tooltip">Saved</span>
            </li>
            <li>
                <a href="#">
                <i class='bx bx-cog'></i>
                <span class="links_name">Setting</span>
                </a>
                <span class="tooltip">Setting</span>
            </li>
            </ul>
            <div class="content">
            <div class="user">
                <div class="user_details">
                <img decoding="async" src="images/profile.jpg" alt=""/>
                <div class="name_job">
                    <div class="name">Bhaskar Gupta</div>
                    <div class="job">Web Designer</div>
                </div>
                </div>
                <i class='bx bx-log-out' id="log_out"></i>
            </div>
            </div>
        </div>
        <div class="home_content">
            <div class="text">Dashboard</div>
            <p>Nullam vulputate ultrices tellus et bibendum. Integer iaculis pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis, justo quis blandit aliquet, sem felis interdum elit, ac dictum purus mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi placerat id. Vivamus at quam rutrum, finibus tortor laoreet, venenatis sem. Nam vitae libero ultrices, tristique ligula non, sagittis elit. Vestibulum sed turpis nec eros convallis viverra. Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur. Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
            </p>
            <p>Nullam vulputate ultrices tellus et bibendum. Integer iaculis pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis, justo quis blandit aliquet, sem felis interdum elit, ac dictum purus mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi placerat id. Vivamus at quam rutrum, finibus tortor laoreet, venenatis sem. Nam vitae libero ultrices, tristique ligula non, sagittis elit. Vestibulum sed turpis nec eros convallis viverra. Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur. Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
            </p>
            <p>Nullam vulputate ultrices tellus et bibendum. Integer iaculis pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis, justo quis blandit aliquet, sem felis interdum elit, ac dictum purus mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi placerat id. Vivamus at quam rutrum, finibus tortor laoreet, venenatis sem. Nam vitae libero ultrices, tristique ligula non, sagittis elit. Vestibulum sed turpis nec eros convallis viverra. Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur. Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
            </p>
            <p>Nullam vulputate ultrices tellus et bibendum. Integer iaculis pharetra ligula, eget condimentum nunc malesuada nec. Nullam eu lorem sed tellus condimentum aliquam in in eros. Maecenas sagittis, justo quis blandit aliquet, sem felis interdum elit, ac dictum purus mauris nec mauris. In hac habitasse platea dictumst. Morbi placerat nec lorem in feugiat. In tristique laoreet diam, vel vulputate mi placerat id. Vivamus at quam rutrum, finibus tortor laoreet, venenatis sem. Nam vitae libero ultrices, tristique ligula non, sagittis elit. Vestibulum sed turpis nec eros convallis viverra. Maecenas nunc arcu, pharetra bibendum feugiat ut, consequat quis massa. Vivamus aliquet eros a efficitur fringilla. Aenean auctor ut mi ut vestibulum. Suspendisse a turpis id nisi faucibus efficitur. Sed ipsum urna, ultricies eget justo vitae, hendrerit malesuada mauris. Donec a turpis malesuada, euismod massa id, ultrices ex.
            </p>
        </div>

        <script src="main.js"></script>
    </div>
  )
}

export default SideBare