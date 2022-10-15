<script>
    import PostList from '@/components/PostList';
    import PostForm from '@/components/PostForm';
    import Page from '@/components/Page';
    const axios = require('axios');
    
    export default {
    data() {
      return {
        posts: [],
        dialogVisible: false,
        selectedItem: '',
        searchText: 'Search...',
        searchQuery: '',
        options: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержанию'}
        ],
        limit: 10,
        page: 0,
        totalPages: 0,
      }
    },
    components: {
        PostList,
        PostForm,
        Page
    },
    methods: {
      createPost(post) {
        this.posts.push(post)
        this.dialogVisible = false
      },
      removePost(id) {
        this.posts = this.posts.filter(post => post.id !== id)
      },
      showDialog() {
        this.dialogVisible = true
      },
      async loadMorePosts() {
        try {
          this.page += 1;
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPages = response.headers['x-total-count'] / this.limit;
          this.posts = [...this.posts, ...response.data];
        } catch (error) {
          console.warn(error.message)
        } finally {
        }
      }
    },
    async mounted() {
      this.loadMorePosts();
    
      // const options = {
      //   rootMargin: '0px',
      //   threshold: 1.0
      // };
      
      // const callback = (entries, observer) => {
      //   if (entries[0].isIntersecting && this.page < this.totalPages) {
      //     this.page += 1;
      //     this.loadMorePosts();
      //   }
      // };
    
      // const observer = new IntersectionObserver(callback, options);
      // observer.observe(this.$refs.observer);
    },
    watch: {
      selectedItem(value) {
        return this.posts.sort((post1, post2) => post1[value].localeCompare(post2[value]))
      },
      // limit(number) {
      //   return this.getPosts(number)
      // },
    },
    computed: {
      seachPosts() {
        if (this.searchQuery.trim() === '') return this.posts
        return this.posts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
    }
    }
    </script>
    
    <template>
      <div class="container" v-cloak>
        <h1>Page with posts</h1>
    
        <form-input 
          class="form__search"
          :placeholder="searchText"
          v-model="searchQuery"
          v-focus
        />
    
        <div class="form__wrapper">
    
          <primary-button
            @click="showDialog"
          >
            Create
          </primary-button>
    
          <primary-select
            v-model="selectedItem"
            :options="options"
          />
    
        </div>
    
        
        <dialog-module
          v-if="dialogVisible"
          v-model:show="dialogVisible"
        >
          <post-form 
            @create="createPost"
          />
        </dialog-module>

        <post-list 
          :posts="seachPosts" 
          @remove="removePost"
          v-if="posts.length"
        />
        <!-- <loader v-else>
          <h2>
            Loading...
          </h2>
        </loader> -->
    
        <div 
          v-intersection="loadMorePosts"
          class="observer"
        >
        </div>
    
        <!-- <div class="page__wrapper">
    
          <page
            :totalPages="totalPages"
            :page="page"
            @change="changePage"
          />
    
        </div> -->
    
      </div>
    </template>
    
    <style lang="scss">
    
    $white: #fff;
    $primary: #42b983;
    
    body {
      font: 500 20px 'Poppins';
    
      overflow-x: hidden;
    }
    
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    .container {
      padding: .5rem 1.5rem;
      margin: auto 1rem;
      border: 2px solid $primary;
    }
    
    .btn-wrapper {
      display: flex;
      gap: 10px;
    }
    
    .form__wrapper {
      display: flex;
      justify-content: space-between;
    
      margin-top: 10px;
    }
    
    .post-number {
      flex-basis: 20%;
    }
    
    .page__wrapper {
      margin-top: 20px;
    
      display: flex;
      gap: 10px
    }
    
    .red {
      color: red;
    }
    
    .observer {
      background: transparent;
    }
    
    </style>
    