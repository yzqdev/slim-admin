<template>
  <header class="h-12 py-2 px-4 flex items-center justify-between">
    <el-link class="ml-2" v-html="notice"></el-link>
    <span class="flex items-center">
      <el-dropdown trigger="click">
        <el-badge v-if="comments.length > 0" :value="comments.length">
          <el-icon :size="20"> <bell /> </el-icon
        ></el-badge>
        <template #dropdown>
          <section class="p-4 flex flex-col">
            <article class="flex">
              <div class="text-base flex-1">通知</div>
              <div
                class="text-base flex-1 cursor-pointer text-right text-primary"
                @click="readAll"
              >
                全部已读
              </div>
            </article>
            <article
              class="w-[20rem] flex hover:bg-amber-200"
              v-for="item in comments"
            >
              <div class="m-2">
                <el-avatar
                  size="large"
                  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                ></el-avatar>
              </div>
              <div class="flex flex-col justify-center">
                <div>
                  {{ item.content }}
                </div>
                <div>{{ formatDate(item.created_at) }}</div>
              </div>
            </article>
          </section>
          <section class="border-2 border-gray-100">
            <el-button class="w-full" type="primary" text>查看所有</el-button>
          </section>
        </template>
      </el-dropdown>
      <el-icon @click="toggle" :size="20">
        <full-screen />
      </el-icon>
      <el-icon @click="showSettings" :size="20">
        <setting />
      </el-icon>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            :size="30"
            src="https://img-static.mihoyo.com/communityweb/upload/222b847170feb3f2babcc1bd4f0e30dd.png"
          />
          <el-button text class="ml-2"
            >{{ userInfo.nickname ? userInfo.nickname : userInfo.username
            }}<el-icon> <arrow-down /></el-icon
          ></el-button>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-link @click="gotoRoute('profile')" :underline="false"
                >个人中心
              </el-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-link
                href="https://github.com/yzqdev/slim-admin"
                target="_blank"
                :underline="false"
                >项目地址
              </el-link>
            </el-dropdown-item>
            <el-dropdown-item divided @click="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown></span
    >
    <el-drawer
      size="20%"
      v-model="settingDraw"
      title="主题配置"
      direction="rtl"
    >
      <el-row>
        <el-col :span="24">
          <el-switch
            v-model="theme.contentPadding"
            size="large"
            active-text="显示边距"
          />
        </el-col>
        <el-col :span="24">
          <el-switch
            v-model="theme.showFooter"
            size="large"
            active-text="显示footer"
          />
        </el-col>
      </el-row>
    </el-drawer>
  </header>
</template>

<script setup lang="ts">
import { ArrowDown, Bell, FullScreen, Setting } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { onBeforeMount, watch } from "vue";
import { useThemeStore } from "@/store/themeConfig";
import { defaultTheme } from "@/constants/defaultTheme";
import { useUserStore } from "@/store/user";
import { UserState } from "@/type/storeTypes";
import { formatDate } from "@/utils/util";

let router = useRouter();
let { setThemeConfig } = useThemeStore();
let userStore = useUserStore();
let userInfo: UserState = computed(() => {
  return userStore.$state;
});

function readAll() {}

let notice = $computed(() => {
  return `你好,${
    userStore.nickname ? userStore.nickname : userStore.username
  },今天要炸鱼吗?`;
});
let comments = $ref<any>([]);
let settingDraw = $ref<boolean>(false);
const theme = $(
  useStorage("themeConfig", {
    ...defaultTheme,
  })
);
let noticeTab = $ref("notice");
const { isFullscreen, enter, exit, toggle } = useFullscreen();

function showSettings() {
  settingDraw = true;
}

function gotoRoute(name: string) {
  router.push({
    name: name,
  });
}

function logout() {
  localStorage.clear();
  router.push({ name: "login" });
}

async function getUnread() {
  // let data = await getCommentsUnreadApi();
  comments = [
    {
      id: 5,
      created_at: "2022-05-12T13:21:47.077+08:00",
      updated_at: "2022-05-12T13:21:47.077+08:00",
      user_id: 0,
      content: "mnc",
      post_id: 8,
      read_state: false,
      nickname: "niu",
      avatar_url: "",
      github_url: "",
    },
    {
      id: 4,
      created_at: "2022-05-12T13:18:03.095+08:00",
      updated_at: "2022-05-12T13:18:03.095+08:00",
      user_id: 0,
      content: "zhendnnd",
      post_id: 8,
      read_state: false,
      nickname: "woc",
      avatar_url: "",
      github_url: "",
    },
    {
      id: 3,
      created_at: "2022-05-12T13:16:14.89+08:00",
      updated_at: "2022-05-12T13:16:14.89+08:00",
      user_id: 0,
      content: "asfsdfdsfsf",
      post_id: 8,
      read_state: false,
      nickname: "fff",
      avatar_url: "",
      github_url: "",
    },
    {
      id: 2,
      created_at: "2022-05-12T13:07:46.64+08:00",
      updated_at: "2022-05-12T13:07:46.64+08:00",
      user_id: 0,
      content: "sdffsdf",
      post_id: 8,
      read_state: false,
      nickname: "aaa",
      avatar_url: "",
      github_url: "",
    },
    {
      id: 1,
      created_at: "2022-05-12T12:54:31.62+08:00",
      updated_at: "2022-05-12T12:54:31.62+08:00",
      user_id: 1,
      content: "fsfsdf",
      post_id: 8,
      read_state: false,
      nickname: "辅导费",
      avatar_url: "",
      github_url: "",
    },
  ];
}

async function getUser() {
  // let data = await getUserInfoApi();
  let data = {
    data: {
      id: 1,
      created_at: "2022-05-11T18:34:44.333+08:00",
      updated_at: "2022-05-11T18:34:44.333+08:00",
      uid: "yzqdev",
      username: "1@qq.com",
      email: "1@qq.com",
      telephone: "",
      password: "",
      verify_state: "0",
      secret_key: "",
      out_time: "0001-01-01T00:00:00Z",
      githubLoginId: "",
      github_url: "",
      is_admin: true,
      avatar_url: "",
      nickname: "可莉",
      lock_state: false,
    },
  };
  userStore.setUserInfo(data.data);
}

onBeforeMount(async () => {
  await getUser();
  await getUnread();
});
watch(
  theme,
  (val, oldVal) => {
    setThemeConfig(val);
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.el-icon {
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
    color: var(--el-color-primary);
  }
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  padding: 0 2rem;
  cursor: pointer;
}
</style>
