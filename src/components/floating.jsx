import React, { Component } from 'react';

class Floating extends Component {
    render() {
        return (
            <div>
                <div class="fixed inset-x-0 bottom-0 p-4">
  <div class="rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
    <p class="text-center text-sm font-medium">
      Love Alpine JS?
      <a href="#" class="inline-block underline">
        Check out this new course!
      </a>
    </p>
  </div>
</div>

            </div>
        );
    }
}

export default Floating;
